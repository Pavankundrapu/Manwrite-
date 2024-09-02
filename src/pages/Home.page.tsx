import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {Chart} from '../components/Chart/Chart';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Chart />
    </>
  );
}
