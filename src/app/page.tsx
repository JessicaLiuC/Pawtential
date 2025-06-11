import Navbar from '../components/navbar';
import Button from '../components/button';


export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="space-y-4 p-4 flex flex-col">
        <Button size="sm" variant="secondary">Next</Button>
        <Button size="md" variant="secondary">Next</Button>
        <Button size="lg" variant="secondary">Next</Button>
        <Button size="sm" variant="text">Skip</Button>
      </div>
    </main>
  );
}