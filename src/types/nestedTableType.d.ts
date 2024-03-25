export type nestedChildType = {
  depth: number;
  time: string;
  room: string;
  guest_names: string;
  package_code: string;
  count: number;
  pax: string;
  remark: string;
};

export type TotalType = {
  total_actual: {
    count: number;
    percentage_count: bumber;
    sales: number;
    percentage_sales: number;
  };
  adults_actual: {
    count: number;
    percentage_count: number;
    sales: number;
    percentage_sales: number;
  };
  children_actual: {
    count: number;
    percentage_count: number;
    sales: number;
    percentage_sales: number;
  };
};

export type nestedTableDataType = {
  key: string;
  depth: number;
  code?: string;
  total: TotalType;
  children: nestedChildType[] | nestedTableDataType[];
};
