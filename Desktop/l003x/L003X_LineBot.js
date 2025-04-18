/******************************************
LineBot
ユーザーから「おみくじ」とテキストメッセージが送信されたとき、ランダムに結果を返すプログラム
*******************************************/
function doPost(e) {
    //ユーザーが入力したデータを変数userMessageに入れ、if分を用いて一致する場合の処理を行う。
    const eventData = JSON.parse(e.postData.contents).events[0];
    const userMessage = eventData.message.text;

    if (userMessage === "おみくじ") {
        //Math.random()では0~1の数字をランダムで返すため、fortunesに登録した数をかける。
        //今回は12個あるため12倍し0~12まで返している。
        const fortunes = ["大大吉！！[恋愛]：運命の人と出会う年！[健康]：絶好調な体調で、どんなことにも挑戦できる！[学問]：すべての努力が実を結び、大きな成果を手に入れる年。[金運]：思いもよらない幸運が舞い込み、充実感を得られる。","大吉！[恋愛]：今年は特別な人との素敵な出会いが訪れる予感！[健康]：体調が良く、心身ともに充実した一年に。[学問]：努力が実を結び、目標を達成できる年！[金運]：予期せぬ収入や幸運に恵まれる年！","大吉！[恋愛]：運命的な出会いに心を躍らせる年！[健康]：活力に満ち、どんなことにも挑戦できる年！[学問]：集中力が高まり、目標が次々と達成できる年！[金運]：思い切った挑戦がいい結果をもたらす年！","大吉！[恋愛]：きずなが深まり、心温まる出来事が多い年！[健康]：健康第一の心がけで、充実した日々を送れる年！[学問]努力がすべて報われ、感謝される年！[金運]：大きな買い物がいい結果を生む年！","中吉！[恋愛]：自分から行動すれば、新たな縁が生まれる年！[健康]：新しい習慣を始めるのに最適な年！[学問]：計画的に進めることで成果が得られる年！[金運]：節約しつつも、良い投資に巡り合える年！","中吉！[恋愛]：新しい場所での素敵な縁が生まれる予感。[健康]：バランスの取れた食生活が運気をアップ！[学問]：新しい分野への挑戦が成功を呼ぶ年！[金運]：人とのつながりが金運を引き寄せる。","中吉！[恋愛]：勇気をもって伝えれば、素敵な展開に。[健康]：朝のルーティンを整えるとよいスタートに。[学問]：新しい学びの環境に飛び込むのが吉。[金運]：自分への投資が幸運を引き寄せる。","中吉！[恋愛]：自然体のあなたに引かれる人が現れる予感。[健康]：適度な休息が健康を支えるカギに。[学問]：新しい目標を設定することで成長できる年！[金運]：堅実な計画で、安定した運気が続く。","小吉！[恋愛]：身近な人との関係を大切にすることで幸運が訪れる。[健康]：生活リズムを整えると、調子が良くなる。[学問]焦らず、一歩ずつ進めることで成果が出る。[金運]：衝動買いを控えれば後で良い結果に。","小吉！[恋愛]：焦らずゆっくり進めることでいい結果に。[健康]：無理をせず、日々のケアを大切に。[学問]少しの工夫が大きな進歩につながる年！[金運]：控えめな支出が将来の助けとなる。","小吉！[恋愛]：友人関係が恋愛へと発展する兆し。[健康]：少しの休息が心と体をリフレッシュさせる。[学問]：短期的な計画を意識することで成果が見える。[金運]：慎重さが大きな損失を防ぐ一年。","小吉！[恋愛]：身近な人への感謝が恋愛運を上げるカギとなる。[健康]：無理をせず、自分のペースで取り組むと吉。[学問]：コツコツ続けた努力が実を結ぶ。[金運]：ちょっとした節約が後々役に立つ。"];
        const result = fortunes[Math.floor(Math.random() * fortunes.length)];

        const replyToken = eventData.replyToken;
        const accessToken = "Access_Token"; 

        const url = "https://api.line.me/v2/bot/message/reply";
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        };

        //文字を返信する際の処理。
        const payload = {
            replyToken: replyToken,
            messages: [
                {
                    type: "text",
                    text: result
                }
            ]
        };

        UrlFetchApp.fetch(url, {
            method: "post",
            headers: headers,
            payload: JSON.stringify(payload)
        });
    }
    
}


  

