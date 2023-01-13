import React from "react";
import { Link } from "react-router-dom";

type SectionItemProps = {
  title: string;
  route: string;
};

const SectionItem = ({ title, route }: SectionItemProps) => (
  <Link to={route}>{title}</Link>
);

export default SectionItem;
