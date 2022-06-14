import React from "react";
import { useRouter } from 'next/router'
const ClientPage = () => {
  const router = useRouter();
  const clients = [
    { id: "yoo", name: "yoojaesuk" },
    { id: "kang", name: "kanghodong" },
  ];
  const generator = () =>{
    router.push({
        pathname : '/components/generator',
    })
  }
  return (
    <>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/components/generator",
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientPage;
