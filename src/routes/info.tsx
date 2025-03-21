import { createFileRoute, Link, useRouter } from '@tanstack/react-router';

export const Route = createFileRoute('/info')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>경로</th>
            <th>링크</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(router.routeTree.children || {}).map((child) => (
            <tr key={child.path}>
              <td>{child.path}</td>
              <td>
                <Link to={child.fullPath}>{child.fullPath}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>
        {`table {
            width: 100%;
            border-collapse: collapse;
            }

            th, td {
            border: 1px solid #ddd;
            padding: 8px;
            }

            th {
            background-color: #f2f2f2;
            text-align: left;
            }

            tr:nth-child(even) {
            background-color: #f9f9f9;
            }

            tr:hover {
            background-color: #ddd;
            }`}
      </style>
    </div>
  );
}
