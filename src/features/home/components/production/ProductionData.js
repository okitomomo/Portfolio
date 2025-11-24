export const products = [
    {
        "id" : "mitsumori",
        "name" : "見積書作成システム",
        "span" : "2ヶ月",
        "overview" : "見積書・請求書を作成し、Excelで出力するシステム",
        "appeal" : "お客様がシステム開発に明るくないお客様だったため、お客様からのご要望が出てきにくかったですが、現状の業務フローなどを図資料を用いながら擦り合わせし、積極的にご提案することで、大変ご満足いただけるシステムを構築することができました。<br>また、インストーラー形式で配布するなど、リリースやアップデートにもお客様が対応しやすい形で提供することができました。",
        "images" : [
            "home.png",
            "create.png",
            "mitsumorisho.png",
            "seikyusho.png",
            "mainte.png"
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
        "id" : "portfolio",
        "name" : "ポートフォリオ",
        "span" : "6ヶ月",
        "overview" : "本サイト。",
        "appeal" : "“技術者”として、自分のことを深く知ってもらうことはとても重要だと考えています。<br>より伝えたい部分を重点的にアピールできるポートフォリオサイトを心掛けました。",
        "images" : [
            "main.png"
        ],
        "technologies" : [
            {
                "name" : "Github",
                "img" : "github.png",
                "comment" : "Github自体はもちろんいままでも利用していましたが、今回Githubでの静的ページ公開に挑戦しました。",
            },
            {
                "name" : "React",
                "img" : "react.png",
                "comment" : "初めて本格的にReactでのレンダリングを学習して取り入れました。マークダウンや画像のスライドショーなどは関連ライブラリで便利に実装することができました。",
            },
            {
                "name" : "TailwindCSS",
                "img" : "tailwind.png",
                "comment" : "自分にとって馴染み深いCSSフレームワークですが、Reactと併せて使用することでより便利さを感じました。",
            },
            {
                "name" : "Docker",
                "img" : "docker.png",
                "comment" : "Viteでフロントエンドのソースをビルドするため、dockerコンテナ上で開発を進めました。"
            }
        ]
    }
];