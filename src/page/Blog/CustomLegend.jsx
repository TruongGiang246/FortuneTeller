const CustomLegend = ({ data }) => {
    return (
      <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0, margin: 0 }}>
        {data.map((entry, index) => (
          <li key={`item-${index}`} style={{ marginRight: 15, width: 75, color: 'white', fontSize: '10px' }}>
            <span
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                backgroundColor: entry.color,
                marginRight: 4,
                borderRadius: '50%',
              }}
            />
            {entry.name}
          </li>
        ))}
      </ul>
    );
  };
export default CustomLegend  