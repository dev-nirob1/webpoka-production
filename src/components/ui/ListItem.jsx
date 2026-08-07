const ListItem = ({ children }) => {
  return (
    <li className="relative pl-5 before:absolute before:left-1 before:top-0 before:font-mono before:text-primary before:content-['✓']">
      {children}
    </li>
  );
};

export default ListItem;