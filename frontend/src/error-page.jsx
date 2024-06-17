import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <strong>ERROR </strong>
      <i>{error.statusText || error.message}</i>
    </div>
  );
}