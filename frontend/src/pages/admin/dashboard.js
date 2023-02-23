import { useSession } from "next-auth/react"

export default function Dashboard() {
    const { data: session, status } = useSession()

    if (status === "authenticated") {
        return <>
            <h1>Dashboard</h1>
            <p>Signed in as {session.user.email}</p>
        </>
    }

    return <a href="/api/auth/signin">Log In</a>
}

