import Link from "next/link";

export default function Countries(params) {
  return (
    <div>
      <h1>CounTrees</h1>
      <ul>
        <li>
          <Link href="/countries/SK">Slovakia</Link>
        </li>
      </ul>
    </div>
  );
}
