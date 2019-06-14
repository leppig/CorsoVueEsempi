export const COLS = {
    sort_order: "retweet_count",

    cols: [
        {
            id: "id",
            visibile: false,
            chiave: "id",
            ordinabile: false,
        },
        {
            id: "utente",
            visibile: true,
            chiave: "user.screen_name",
            ordinabile: true,
            sort_order: 'string'
        },
        {
            id: "descrizione",
            visibile: true,
            chiave: "user.description",
            ridotto: true,
            ordinabile: true,
            sort_order: 'string'
        },
        {
            id: "numero tweet",
            visibile: true,
            chiave: "user.tweets_count",
            ordinabile: true,
            sort_order: 'number'
        },
        {
            id: "Nome utente",
            visibile: true,
            chiave: "user.name",
            ordinabile: true,
            sort_order: 'string'
        },
        {
            id: "retweet",
            visibile: true,
            chiave: "retweet_count",
            ordinabile: true,
            sort_order: 'number'

        },
        {
            id: "testo",
            visibile: false,
            chiave: "text",
            ridotto: true,
            ordinabile: true,
            sort_order: 'string',
        },
        {
            id: "followers",
            visibile: true,
            chiave: 'user.followers_count',
            ordinabile: true,
            sort_order: 'number',
        }

    ] 
}