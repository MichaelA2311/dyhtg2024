type LegendItem = {
    label: string;
    color: string;
  };

export const Legend = () => {
    const legendItems: LegendItem[] = [
        { label: 'Good', color: '#2cf529' },
        { label: 'Neutral', color: '#00ccff' },
        { label: 'Bad', color: '#f90101' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {legendItems.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: item.color,
                  border: '1px solid #000',
                }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      );
}