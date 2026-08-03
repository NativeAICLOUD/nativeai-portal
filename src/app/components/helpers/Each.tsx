import { Children } from "react";

export const Each = ({ render, of }: any) =>
  Children.toArray(of.map((item: any, index: number) => render(item, index)));

/*
<Each of={books} render={(item, index) => 
  <li>{`${index}: ${item.title}`}</li>
} />
*/