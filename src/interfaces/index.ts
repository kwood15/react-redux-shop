export interface IBook {
  records: {
    data: {
      key: string;
      url?: string;
      title: string;
      subtitle?: string;
      cover: {
        small?: string;
      };
      authors: IAuthor[];
      publish_date: string;
    };
  };
}

export interface IAuthor {
  key: string;
  name?: string;
  url?: string;
}
