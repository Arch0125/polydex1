export const transactionSchema ={
    name:'transactions',
    title:'Transactions',
    type:'document',
    fields:[
        {
            name:'txHash',
            title:'Transaction Hash',
            type:'string'
        },
        {
            name:'fromAddress',
            title:'From (Wallet Address)',
            type:'string',
        },
        {
            name:'toAddress',
            title:'To (WalletAddress)',
            type:'string'
        },
        {
            name:'amount',
            title:'Amount',
            type:'number',
        },
        {
            nemr:'timestamp',
            title:'Time Stamp',
            type:'datetime',
        },
    ]
}