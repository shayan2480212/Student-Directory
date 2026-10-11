// Breadcrumb. Receives an array of items from App.
function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-primary p-3 rounded">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.label}
              className={`breadcrumb-item ${isLast ? 'active text-white' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? item.label : <a href={item.href} className="text-white-50">{item.label}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
