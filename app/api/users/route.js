// http://localhost:3000/api/users

export async function GET(request){
    // Handle GET request for  /api/users
    // Retrieve users from the database a=or any data source
    const users =[
        {id: 1, name: 'Yogi'},
        {id:2, name:'Rendra'},
        {id:3, name:'Reza'}
    ];
    // Send the users as a response
    return new Response(JSON.stringify(users))
}