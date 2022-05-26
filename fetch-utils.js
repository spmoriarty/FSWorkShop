const SUPABASE_URL = 'https://xsjxkslcnzexkeuqopsq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzanhrc2xjbnpleGtldXFvcHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTI0MzIsImV4cCI6MTk2Nzg2ODQzMn0.6PW-I5jDnoqhgO6Egpvc5fEpprJ1jHfmAODRlCynp2I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function getWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');
    return response.data;
}

export async function createPart(participant) {
    const response = await client.from('participants').insert(participant);
    return response.data;
}

export async function deleteParticipant(participant) {
    const response = await client.from('participants').delete().eq('id', participant);
    return response.data;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshop');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
