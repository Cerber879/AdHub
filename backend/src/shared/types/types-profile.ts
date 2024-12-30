export const TypesProfile = ['Частное лицо', 'Организация'] as const
export type TypesProfileType = (typeof TypesProfile)[number];