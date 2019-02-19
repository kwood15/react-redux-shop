export type Book = {
  records: {
    data: {
      key: string;
      url?: string;
      title: string;
      subtitle?: string;
      cover: {
        small?: string;
      };
      authors: Author[];
      publish_date: string;
    };
  };
};

export type Author = {
  key: string;
  name?: string;
  url?: string;
};
