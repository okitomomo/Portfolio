export const skills = [
    {
        "name" : "Frontend",
        "level" : 4,
        "img" : "",
        "comment" : "大学時代に本格的に触り始め、WEB系の全ての業務で使用してきました。",
        "_children" : [
            {
                "name" : "HTML5",
                "level" : 4,
                "img" : "html5.png",
                "comment" : "大学時代に本格的に触り始め、WEB系の全ての業務で使用してきました。",
                "_children" : []
            },
            {
                "name" : "JavaScript",
                "level" : 4,
                "comment" : "TypeScriptが登場し、「脱jQuery」が騒がれたころから、VanillaのJS(ES3準拠)を再勉強。",
                "img" : "js.png",
                "_children" : [
                    {
                        "name" : "jQuery",
                        "level" : 4,
                        "comment" : "今では積極的に使用していませんが、昔は一強だったので使用率が高かったです。",
                        "img" : "jquery.png",
                        "children" : [
                        ]
                    },
                    {
                        "name" : "React",
                        "level" : 2,
                        "comment" : "業務利用はありませんが、シェアが高いため個人で勉強し、基礎的な知識を身に付けました。",
                        "img" : "react.png",
                        "children" : [
                        ]
                    }
                ]
            },
            {
                "name" : "CSS3",
                "level" : 4,
                "comment" : "あいうえお",
                "img" : "css.webp",
                "_children" : [
                    {
                        "name" : "Sass",
                        "level" : 4,
                        "comment" : "CSSファイルの規模が大きくなる際に使用しました。",
                        "img" : "sass.png",
                        "children" : []
                    },
                    {
                        "name" : "TailWindCSS",
                        "level" : 5,
                        "comment" : "流行り始めのころから使用しており、一番好きなCSSフレームワークです。",
                        "img" : "tailwind.png",
                        "children" : []
                    },
                    {
                        "name" : "Bootstrap",
                        "level" : 3,
                        "comment" : "4の時代にレスポンシブ対応のWEBページを作る際に使用していました。",
                        "img" : "bootstrap.png",
                        "children" : []
                    }
                ]
            }
        ]
    },
    {
        "name" : "Backend",
        "level" : 5,
        "comment" : "業務担当したのがtoB向けのシステムが多かったため、見た目(フロント)よりもサーバ側の業務ロジックを重視して担当することが多かったため、1番得意な分野です。",
        "img" : "",
        "_children" : [
            {
                "name" : "Java",
                "level" : 5,
                "comment" : "大学時代から学習し、業務でもWEBやバッチ処理で使用しました。",
                "img" : "java.png",
                "_children" : [
                    {
                        "name" : "Spring Framework",
                        "level" : 5,
                        "comment" : "toB向けのシステムの構築で使用し、ソース管理を任されていたため、幅広い知識があります。",
                        "img" : "spring.png",
                        "_children" : []
                    },
                    {
                        "name" : "Spring Boot",
                        "level" : 1,
                        "comment" : "業務利用はありませんが、APIが主流となったくらいのタイミングで学習しました。",
                        "img" : "springboot.webp",
                        "_children" : []
                    }
                ]
            },
            {
                "name" : "PHP",
                "level" : 5,
                "comment" : "中規模以下のWEBシステムでは積極的に採用し、業務で使用しました。",
                "img" : "php.png",
                "_children" : [
                    {
                        "name" : "Laravel",
                        "level" : 5,
                        "comment" : "PHPの業務はすべてLaravelで行いました。カスタマイズなどにも慣れています。",
                        "img" : "laravel.png",
                        "_children" : []
                    }
                ]
            }
        ]
    },
    {
        "name" : "Application",
        "level" : 4,
        "comment" : "主に住宅CADの開発で使用しました。歴が長く構築や設計に対する知見があります。",
        "img" : "",
        "_children" : [
            {
                "name" : "C",
                "level" : 3,
                "comment" : "住宅CADの開発で使用しました。ポインタやメモリに関する最低限の知見があります。",
                "img" : "c.png",
                "_children" : []
            },
            {
                "name" : "C++",
                "level" : 4,
                "comment" : "住宅CADの開発で使用しました。標準ライブラリも利用したため知見があります。",
                "img" : "cpp.png",
                "_children" : []
            },
            {
                "name" : "Python",
                "level" : 2,
                "comment" : "業務利用はありませんが、個人でDiscordのBot開発で利用してから学習しています。最近ではAPIを簡易的にたたきたい場合などにも利用します。",
                "img" : "python.png",
                "_children" : []
            },
            {
                "name" : "VBA",
                "level" : 5,
                "comment" : "業務効率化のためのマクロから、DB接続が必要な本格的なアプリ利用まで経験があります。",
                "img" : "vba.png",
                "_children" : []
            },
            {
                "name" : "VB",
                "level" : 3,
                "comment" : "いまでは積極的に利用したいとは思いませんが、古いシステムの保守などで使用し言語に対する理解があります。",
                "img" : "vb.jpg",
                "_children" : []
            },
            {
                "name" : "C#",
                "level" : 4,
                "comment" : "CADの開発と、一部個人開発で利用しました。",
                "img" : "csharp.png",
                "_children" : [
                    {
                        "name" : "WPF",
                        "level" : 3,
                        "comment" : "CADの画面開発で使用しました。XAMLの記述内容やViewとの紐づけなどMVCに対する理解があります。",
                        "img" : "wpf.png",
                        "_children" : []
                    },      
                    {
                        "name" : ".NET Framework",
                        "level" : 3,
                        "comment" : "ExcelなどOffice関連ソフトと連携が必要となるアプリケーションで使用しました。",
                        "img" : "net.png",
                        "_children" : []
                    }
                ]
            }
        ]
    },
    {
        "name" : "DataBase",
        "level" : 4,
        "comment" : "構築や設計～生のSQLまで知見があります。性能に関するチューニングについては学習中です。",
        "img" : "",
        "_children" : [
            {
                "name" : "SQL Server",
                "level" : 3,
                "comment" : "Windowsと親和性の高いシステムの作成時に利用しました。",
                "img" : "sqlserver.png",
                "_children" : []
            },
            {
                "name" : "Oracle",
                "level" : 4,
                "comment" : "JavaのWEBアプリケーションとの組み合わせで利用しました。PL/SQLでのデータパッチやデータの作成も経験があります。",
                "img" : "oracle.webp",
                "_children" : []
            },
            {
                "name" : "MySQL",
                "level" : 4,
                "comment" : "MariaDBも含めPHPのWEBアプリケーションとの組み合わせで利用しました。",
                "img" : "mysql.png",
                "_children" : []
            },
            {
                "name" : "SQLite",
                "level" : 4,
                "comment" : "CADなどスタンドアロンシステムのローカルDBとして利用しました。",
                "img" : "sqlite.png",
                "_children" : []
            }
        ]
    }

];