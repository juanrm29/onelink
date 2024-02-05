import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import { Page } from "@/models/page";


export default async function AccountPage({ searchParams }) {
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;
 
  if (!session) {
    return redirect("/");
  }
  const page = await Page.findOne({owner: session?.user?.email});
  
  if (page) {
    return (
        <div>
            your page is: /{page.uri}
        </div>
    )
  }
  
  return (
    <div>
        <UsernameForm desiredUsername={desiredUsername}/>
    </div>
  );
}
