export const drawerProperties: any = {
  title: {
    type: 'string',
    description: 'Drawer başlığı, üst kısımda büyük yazı ile gösterilir.',
  },
  subtitle: {
    type: 'string',
    description: 'Başlığın altına eklenen açıklama metni.',
  },
  children: {
    type: 'ReactNode',
    description:
      'Drawer içerisinde yer alan, dinamik olarak render edilen içerik.',
  },
  fixed: {
    type: 'boolean',
    description: 'Eğer true ise, drawer kapatılamaz ve sabit kalır.',
  },
};
