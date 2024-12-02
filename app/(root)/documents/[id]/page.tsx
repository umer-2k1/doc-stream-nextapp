import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { getClerkUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async ({ params: { id } }: SearchParamProps) => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const emailAddress = clerkUser.emailAddresses?.[0]?.emailAddress;

  const room = await getDocument({
    roomId: id,
    userId: emailAddress,
  });

  if (!room) redirect("/");

  const userIds = Object.keys(room.usersAccesses);
  const users = await getClerkUsers({ userIds });

  const filteredUsers = users.filter((user: User) => user !== null);

  const usersData = filteredUsers.map((user: User) => ({
    ...user,
    userType: room.usersAccesses[user.email]?.includes("room:write")
      ? "editor"
      : "viewer",
  }));

  const currentUserType = room.usersAccesses[emailAddress]?.includes(
    "room:write",
  )
    ? "editor"
    : "viewer";

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        roomId={id}
        roomMetadata={room.metadata}
        users={usersData}
        currentUserType={currentUserType}
      />
    </main>
  );
};

export default Document;
