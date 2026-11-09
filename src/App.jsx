import Button from './components/atoms/Button'
import Spinner from './components/atoms/Spinner'

export default function App() {
  return (
    <div style={{ padding: 24, display: 'grid', gap: 24 }}>
      <section>
        <h2>Botones</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button onClick={() => alert('Primary')}>Primary</Button>
          <Button onClick={() => alert('Secondary')} variant="secondary">Secondary</Button>
          <Button onClick={() => alert('Danger!!!')} variant="danger">Danger</Button>
        </div>
      </section>

      <section>
        <h2>Spinners</h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </div>
      </section>
    </div>
  )
}