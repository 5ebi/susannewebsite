import KontaktClient from './KontaktClient';
import { kontaktMetadata } from './metadata';

export const metadata = kontaktMetadata;

export default function Kontakt() {
  return <KontaktClient />;
}
