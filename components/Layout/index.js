import Head from 'next/head'

export default function Layaout({ children, titlePage }) {
  return (
    <main style={{ width: '70vw', height: '100vh', margin: 'auto', padding: '30px 0' }}>
      <Head>
        <title>{titlePage}</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      {children}
    </main>
  )
}
