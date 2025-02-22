import { Card, CardHeader, CardFooter, CardTitle, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


export type User ={
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default async function HomePage() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const users: User[] = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!users) {
      throw new Error('No users in response');
    }

    return (
      <main>
        <div className="flex flex-wrap justify-space-between gap-4 m-4">
          {users.map((user) => {
            if (!user) {
              throw new Error('User is null or undefined');
            }
            return (
              <Card key={user.id} className="w-60 h-80">
                <CardHeader>
                  <CardTitle>{user.username}</CardTitle>
                </CardHeader>
                <CardContent className="h-30">
                  <p className="text-wrap">{user.email}</p>
                  <p>Company: {user.company.name}</p>
                </CardContent>
                <CardFooter>
                <Button asChild variant="secondary">
                  <Link href={`/user/${user.id}`}>View Details</Link>
                </Button>
                </CardFooter>
              </Card>
            )})}
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
    return <div>Failed to fetch users</div>;
  }
}
