export const site = {
 brand: {name: 'Iuris Balance', descriptor: 'Despacho Jurídico-Contable'},
 siteUrl: import.meta.env.SITE_URL || null,
 accountingPageEnabled: false,
 firmIntroduction: 'Iuris Balance es un despacho jurídico multidisciplinario que ofrece asesoría, representación legal, elaboración de documentos y seguimiento de procedimientos judiciales y extrajudiciales en las áreas civil, familiar, laboral, penal, mercantil y amparo.',
 team: [], plannedMailboxes: ['contacto', 'direccion', 'notificaciones', 'abogados', 'contadores'], contact: {email:null,phoneDisplay:'221 410 9828',phoneE164:'+522214109828',secondPhoneDisplay:'221 671 6829',secondPhoneE164:'+522216716829',whatsappE164:null,address:'30 Poniente número 105, colonia Mártires del Trabajo, Puebla',mapUrl:'https://www.google.com/maps/search/?api=1&query=30+Poniente+105+Martires+del+Trabajo+Puebla',businessHours:'Atención 24 horas'},
 privacyNotice: null as string | null,
};
export const contactEnabled = import.meta.env.CONTACT_ENABLED === 'true' && !!site.privacyNotice;
export const indexable = import.meta.env.PUBLICATION_READY === 'true' && !!site.siteUrl;

