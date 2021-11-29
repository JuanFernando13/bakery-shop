export default function RenderCards({ children }) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        justifyItems: 'center',
        height: '90%',
        alignItems: 'center',
        gridGap: '125px'
      }}
    >
      {children}
    </section>
  )
}
