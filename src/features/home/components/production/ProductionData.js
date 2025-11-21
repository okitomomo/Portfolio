export const products = [
    {
        "id" : "1",
        "name" : "見積書作成システム",
        "span" : "2ヶ月",
        "overview" : "見積書・請求書を作成し、Excelで出力するシステム",
        "appeal" : "お客様がシステム開発に明るくないお客様だったため、お客様からのご要望が出てきにくかったですが、現状の業務フローなどを図資料を用いながら擦り合わせし、積極的にご提案することで、大変ご満足いただけるシステムを構築することができました。<br>また、インストーラー形式で配布するなど、リリースやアップデートにもお客様が対応しやすい形で提供することができました。",
        "images" : [

        ],
        "technologies" : [
            {
                "name" : "C#",
                "img" : "csharp.png",
                "comment" : "要件定義の段階で、Excelでの出力がマストとのことだったため、C#での開発を決めました。",
            },
            {
                "name" : ".NET Framework",
                "img" : "net.png",
                "comment" : "お客様の予算の都合で凝ったFramework環境下での開発工数は確保できなかったため、手軽に開発できる .NET Framework を採用することに決めて作業を進めました。",
            },
            {
                "name" : "SQLite",
                "img" : "sqlite.png",
                "comment" : "1台のみで利用する完全スタンドアローンのアプリのため、ローカルDBとしてSQLiteを採用しました。",
            }
        ]
    },
    {
        "id" : "2",
        "name" : "ポートフォリオ",
        "span" : "6ヶ月",
        "overview" : "本サイト。",
        "appeal" : "",
        "images" : [
        
        ],
        "technologies" : [
            {
                "name" : "Github",
                "img" : "",
                "comment" : "",
            },
            {
                "name" : "TailwindCSS",
                "img" : "",
                "comment" : "",
            },
            {
                "name" : "React",
                "img" : "",
                "comment" : "",
            },
            "C#",
            ".NET Framework",
            "SQLite",
            "要件定義の段階で、Excelでの出力がマストとのことだったため、C#での開発を決めました。お客様の予算の都合で凝ったFramework環境下での開発工数は確保できなかったため、手軽に開発できる .NET Framework を採用することに決めて作業を進めました。"
        ]
    }
];