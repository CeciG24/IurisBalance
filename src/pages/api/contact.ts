import type { APIRoute } from 'astro';
export const prerender = false;
const reply=(status:number,code?:string,fieldErrors?:Record<string,string>)=>new Response(JSON.stringify(status===200?{ok:true}:{ok:false,code,...(fieldErrors?{fieldErrors}:{})}),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
export const POST: APIRoute = async ({request}) => {
 if(request.headers.get('origin')!==new URL(request.url).origin)return reply(403,'FORBIDDEN');
 if(!request.headers.get('content-type')?.startsWith('application/json'))return reply(400,'VALIDATION_ERROR',{});
 let body='';try{const reader=request.body?.getReader();if(!reader)return reply(400,'VALIDATION_ERROR',{});let size=0;const decoder=new TextDecoder();while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>12000){await reader.cancel();return reply(413,'PAYLOAD_TOO_LARGE');}body+=decoder.decode(value,{stream:true});}body+=decoder.decode();}catch{return reply(400,'VALIDATION_ERROR',{});}
 let data:Record<string,unknown>;try{data=JSON.parse(body);if(!data||Array.isArray(data)||typeof data!=='object')throw Error();}catch{return reply(400,'VALIDATION_ERROR',{});}
 if(Object.keys(data).some(k=>!['name','contact','message','website'].includes(k)))return reply(400,'VALIDATION_ERROR',{});
 const errors:Record<string,string>={};for(const [key,min,max] of [['name',2,100],['contact',1,254],['message',10,2000]] as const){if(typeof data[key]!=='string'||String(data[key]).trim().length<min||String(data[key]).trim().length>max)errors[key]='Revisa la longitud de este campo.';}
 const contact=String(data.contact||'').trim();if(contact.includes('@')?!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact):!(/^[+\d\s().-]+$/.test(contact)&&contact.replace(/\D/g,'').length>=7&&contact.replace(/\D/g,'').length<=15))errors.contact='Indica un correo o teléfono válido.';
 if(typeof data.website!=='string')errors.website='Campo inválido';if(Object.keys(errors).length)return reply(400,'VALIDATION_ERROR',errors);
 if(data.website)return reply(400,'VALIDATION_ERROR',{});
 // Integration stays fail-closed until a provider and distributed protection are configured.
 return reply(503,'SERVICE_UNAVAILABLE');
};
