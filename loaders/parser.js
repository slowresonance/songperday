class Song {
  constructor(msg) {
    this.regex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    this.parseMsg(msg);
  }

  parseMsg(msg) {
    this.id = generateID(7);
    this.source = msg.match(this.regex)[0];
    this.provider = msg.split("] ")[1].split(":")[0];
    [this.date, this.month, this.year] = msg.split(",")[0].split("/");
  }

  export() {
    return {
      id: this.id,
      source: this.source,
      provider: this.provider === "Monica" ? "Mohan" : this.provider,
      year: this.year,
      month: this.month,
      date: this.date,
    };
  }
}

function generateID(length) {
  return [...Array(length)]
    .map((_) => ((Math.random() * 36) | 0).toString(36))
    .join(``)
    .toUpperCase();
}

const parseChat = (chat) => {
  const songs = [];
  const msgs = chat.split("[");

  for (const msg of msgs) {
    if (msg.includes("http")) {
      songs.push(new Song(msg).export());
    }
  }
};

const data = `[16/01/22, 12:12:45 PM] 1 Song per Day: Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
    [16/01/22, 12:12:45 PM] ‎Monica created group “1 Song per Day”
    [16/01/22, 12:12:45 PM] ‎Monica added you
    [16/01/22, 12:14:22 PM] ‎Monica changed the group description
    [16/01/22, 12:51:14 PM] Rachana: I never agreed to this
    [16/01/22, 2:10:37 PM] Manisha: I like this
    [16/01/22, 3:28:21 PM] Manisha: https://music.youtube.com/watch?v=HQ1ooZl4tyU&feature=share it's a fun song
    [17/01/22, 7:32:50 PM] Manisha: https://music.youtube.com/watch?v=q9TQFZJ2biM&feature=share I fell asleep to this once
    [17/01/22, 9:51:36 PM] Monica: https://youtu.be/G71kaqooAbk study music for my 15 yr old self
    [17/01/22, 9:54:23 PM] Rachana: https://youtu.be/B2OcaDNaPiA
    
    A track from a game I played a few years ago
    [18/01/22, 6:21:28 AM] ‎Monica changed the group description
    [18/01/22, 6:25:05 AM] Monica: https://www.youtube.com/watch?v=DoCkfgzOV44
    [18/01/22, 9:37:00 AM] Monica: https://www.youtube.com/watch?v=AmmFD2OIs_k
    [18/01/22, 10:21:18 AM] Manisha: https://youtu.be/WbGANXj9xIo  yes
    [18/01/22, 6:49:46 PM] Rachana: https://youtu.be/ocAKhyWuawo
    
    I recommend watching with English Captions... I like this song for the story it tells
    [21/01/22, 1:55:37 PM] Monica: Just discovered this! https://www.youtube.com/watch?v=g_j9GY-JU_Y
    [21/01/22, 4:58:59 PM] Manisha: https://youtu.be/sFGoFQyEKws me too
    [22/01/22, 6:12:04 PM] Monica: https://music.youtube.com/watch?v=XBIYD3h1olY&feature=share
    [23/01/22, 10:16:37 AM] Manisha: https://youtu.be/XP6cXe-STzU
    [24/01/22, 5:27:48 PM] Manisha: https://youtu.be/IGgEOhfUZV4
    [24/01/22, 11:02:40 PM] ‎Monica added Prashansa
    [24/01/22, 11:12:00 PM] Prashansa: what is this grp for?
    [25/01/22, 5:19:16 PM] Prashansa: ‎This message was deleted.
    [25/01/22, 6:02:59 PM] Manisha: https://youtu.be/6xpMb1rzRUk
    [27/01/22, 7:49:42 PM] Manisha: https://youtu.be/uc6f_2nPSX8
    [27/01/22, 7:50:34 PM] Monica: https://youtu.be/tpWLeUt_7Cc
    [28/01/22, 5:14:51 PM] Prashansa: https://www.youtube.com/watch?v=WbCxxb5fQHg&list=PL5gMuG8bU7YhMZ4HbBz-5hvH0pA3HKJVa&index=6
    [28/01/22, 11:15:17 PM] Rachana: https://youtu.be/4iTAkRHGbuM
    [28/01/22, 11:15:26 PM] Rachana: Does this count?
    [28/01/22, 11:15:33 PM] Rachana: I'm gonna say it counts
    [28/01/22, 11:15:44 PM] Rachana: It's technically a song
    [28/01/22, 11:15:54 PM] Rachana: And objectively a masterpiece
    [28/01/22, 11:16:41 PM] Manisha: my god
    [28/01/22, 11:16:49 PM] Manisha: this shouldn't be free
    [29/01/22, 1:51:25 AM] Prashansa: 😂😂😂🤣👍
    [29/01/22, 1:54:06 AM] Prashansa: oh my its soo long
    [30/01/22, 3:25:54 PM] Manisha: https://youtu.be/FEWi3l1ghD4
    [06/02/22, 12:33:11 PM] Monica: https://www.youtube.com/watch?v=CSYp33F_0Ss
    [06/02/22, 2:59:38 PM] Prashansa: someeone plz give a soft slow sad song
    [06/02/22, 3:41:27 PM] Prashansa: not necessarily sad.. just which could make u cry
    [06/02/22, 3:44:01 PM] Manisha: https://open.spotify.com/track/04RoO4qhxaUdXvZQYekIrS?si=-URn6VhVReOxKkCQHPbjlw&utm_source=whatsapp I felt pretty sad listening to this recently
    [06/02/22, 3:46:31 PM] Manisha: The ending part
    [06/02/22, 4:22:00 PM] Prashansa: yeah.. but it is emptying out one
    [06/02/22, 4:23:14 PM] Prashansa: i was wishing for filling up kinda feeling
    [06/02/22, 4:25:58 PM] Rachana: Hmm
    [06/02/22, 4:27:39 PM] Prashansa: (😂how is anyone supposed to understand this im soo abstract)
    [06/02/22, 4:43:44 PM] Prashansa: ‎This message was deleted.
    [06/02/22, 4:44:46 PM] Monica: a little bit of both
    [06/02/22, 4:44:51 PM] Monica: but we get you
    [06/02/22, 4:45:25 PM] Prashansa: 👍ok then
    [08/02/22, 5:09:11 PM] Prashansa: https://www.youtube.com/watch?v=1jO2wSpAoxA
    [08/02/22, 5:09:37 PM] Prashansa: hav u ppl heard this?
    [12/02/22, 12:30:30 PM] Manisha: https://open.spotify.com/track/5lWFrW5T3JtxVCLDb7etPu?si=6a57f14725f14cca
    [27/02/22, 3:28:10 PM] Rachana: https://www.youtube.com/watch?v=Q3Kvu6Kgp88
    
    I accidentally found the Inception song![27/02/22, 3:28:55 PM] Prashansa: oh
    [28/02/22, 10:46:29 PM] Manisha: https://youtu.be/PlzegsqA-6c
    [28/02/22, 10:46:49 PM] Manisha: new jam bois
    ‎[28/02/22, 10:48:15 PM] Manisha: ‎<attached: 00000058-GIF-2022-02-28-22-48-15.mp4>
    [09/03/22, 4:41:32 PM] ‎You're now an admin
    [11/03/22, 1:02:17 PM] ‎Monica added Suprith
    [14/03/22, 10:40:49 PM] Monica: https://www.youtube.com/watch?v=EfgAd6iHApE
    [15/03/22, 12:39:01 AM] Prashansa: this is famous
    [15/03/22, 12:39:06 AM] Prashansa: i hav heard this
    [15/03/22, 12:39:22 AM] Monica: ikik
    [15/03/22, 12:39:33 AM] Suprith: op
    [15/03/22, 12:43:47 AM] Prashansa: when did u come in
    [15/03/22, 12:44:12 AM] Suprith: friday
    [15/03/22, 12:44:17 AM] Prashansa: 👀😂
    [15/03/22, 12:44:22 AM] Prashansa: welcome
    [15/03/22, 10:03:38 AM] Manisha: https://youtu.be/ugpywe34_30
    [18/03/22, 7:39:25 PM] Suprith: https://youtu.be/E9T78bT26sk
    [19/03/22, 12:45:09 PM] Manisha: https://youtu.be/p69QGs15Kr8
    [24/03/22, 12:18:56 PM] Monica: https://music.youtube.com/watch?v=L3HS8Gm5cCw
    [28/03/22, 8:20:01 AM] Manisha: https://youtu.be/Zus07Tqy5cI
    [05/04/22, 8:43:36 AM] Manisha: https://youtu.be/sl3RyfrWHt8
    [07/04/22, 8:02:00 PM] Suprith: https://open.spotify.com/track/0zANeX4R6uWb82gCQAguOD?si=vV8eULZ0SeS-mnQIARVQbw
    [14/04/22, 12:26:24 PM] Rachana: https://youtu.be/URR_Nv-6MZs
    [29/04/22, 5:23:58 PM] Prashansa: https://music.youtube.com/watch?v=HZbsLxL7GeM&feature=share
    [29/04/22, 5:24:51 PM] Suprith: Hell yeaaaa this is a song
    ‎[29/04/22, 5:33:10 PM] Prashansa: ‎<attached: 00000080-GIF-2022-04-29-17-33-10.mp4>
    [09/05/22, 1:03:31 AM] Suprith: https://youtu.be/HyHNuVaZJ-k
    [12/05/22, 2:29:22 AM] Monica: https://youtu.be/Qdkt3I5-FG4
    [12/05/22, 2:48:22 AM] Manisha: https://youtu.be/5e1zT7miep8
    [17/05/22, 9:29:09 PM] Prashansa: i want songs
    [17/05/22, 10:06:40 PM] Prashansa: this gives me horror, misery/despair image
    [17/05/22, 10:18:25 PM] Manisha: https://open.spotify.com/track/3Wrjm47oTz2sjIgck11l5e?si=lb8FM3K3R8eiwJoSEiEjZg&utm_source=whatsapp
    [17/05/22, 10:18:59 PM] Monica: dudddde
    [17/05/22, 10:20:17 PM] Manisha: What's up?
    [17/05/22, 10:20:24 PM] Prashansa: mohan also shared it
    [17/05/22, 10:20:35 PM] Prashansa: and it is a great song
    [17/05/22, 10:20:38 PM] Manisha: Lmao I discovered it today xD
    [17/05/22, 10:20:45 PM] Monica: .
    [17/05/22, 10:20:46 PM] Monica: lol
    [17/05/22, 10:20:51 PM] Monica: its sooooo gud
    [17/05/22, 10:20:51 PM] Manisha: Very interesting voice
    [17/05/22, 10:20:56 PM] Monica: his face
    [17/05/22, 10:20:58 PM] Manisha: Yep
    [17/05/22, 10:21:01 PM] Monica: aaaaaaahhhhh
    [17/05/22, 10:21:20 PM] Prashansa: ‎This message was deleted.
    [17/05/22, 10:21:27 PM] Monica: https://youtu.be/ptnYBctoexk
    [17/05/22, 10:21:50 PM] Monica: out of context
    [17/05/22, 10:21:56 PM] Prashansa: ooh we can share other lang songs>?
    [17/05/22, 10:22:03 PM] Monica: yes i think
    [17/05/22, 10:22:22 PM] Monica: (extra points if it's obscure) <- description
    [18/05/22, 9:27:27 AM] Manisha: https://youtu.be/pA8p_YTWjMI
    [18/05/22, 9:39:07 AM] Monica: https://youtu.be/ic1l36GrNOU
    [19/05/22, 8:04:42 AM] Suprith: I love this song
    https://open.spotify.com/track/1aklRy3btsbucImSXvR2SY?si=P29VsLYzSnecSALuLSTlgg
    [19/05/22, 8:06:34 AM] Monica: I know atleast 3 songs with the exactly the same tune
    [19/05/22, 8:06:44 AM] Suprith: Plis send
    [19/05/22, 8:06:44 AM] Monica: but its really good
    [19/05/22, 8:14:42 AM] Monica: can't find the composers i was thinking about but here's the list: https://en.wikipedia.org/wiki/Bayat%C4%B1lar
    [19/05/22, 8:20:15 AM] Monica: btw if you like songs like that here's one of my fav: https://www.youtube.com/watch?v=F8kD8PJ5x1k
    [20/05/22, 2:47:58 PM] Monica: https://youtu.be/c-7LeX71usc
    [20/05/22, 8:20:08 PM] Prashansa: GUY.exe
    [20/05/22, 10:34:16 PM] Prashansa: heard this ?
    [24/05/22, 1:32:20 AM] Prashansa: https://www.youtube.com/watch?v=P3vmeOiKbQc&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA&start_radio=1&rv=r2Kh_XMIDPU
    [27/05/22, 2:06:20 PM] Monica: https://youtu.be/Jg5wuEk0Gvs
    [28/05/22, 7:26:24 AM] Monica: https://youtu.be/eRMQzbL9MSs
    [05/06/22, 2:53:04 PM] Monica: https://youtu.be/djV11Xbc914
    [06/06/22, 9:42:02 AM] Manisha: https://youtu.be/5G5xyRW_t50
    [16/06/22, 6:54:47 PM] Manisha: https://youtu.be/K3Qzzggn--s he wears very interesting pants
    [16/06/22, 8:12:03 PM] Monica: https://youtu.be/8sgycukafqQ
    [16/06/22, 10:38:21 PM] Monica: https://youtu.be/Tm8LGxTLtQk @917995215297 i think im addicted to this
    [16/06/22, 10:41:13 PM] Manisha: oh no oh no no no
    [16/06/22, 10:41:28 PM] Manisha: :c I miss him again now
    [20/06/22, 2:34:48 AM] Manisha: https://youtu.be/GtQgyIp_K5k
    [28/06/22, 2:42:20 PM] Monica: https://youtu.be/s0JJxPyhOH0 cc Nandu
    [30/06/22, 4:42:48 PM] Manisha: https://open.spotify.com/track/6MxMqCgqmekcr0VwSU7AVH?si=410a4dac7334441e
    [03/07/22, 10:30:12 PM] Manisha: https://youtu.be/FcIlTfhoYzs
    [05/07/22, 11:42:14 AM] Manisha: https://youtu.be/ey1Y87C5Tow
    [11/07/22, 3:42:50 PM] Manisha: https://youtu.be/R8FHtIhWqNo
    [14/07/22, 10:30:50 AM] Suprith: https://open.spotify.com/track/14boA065HMHWvqyPPEeN4y?si=Ofah7ogYT7q-sC1AucoXrw
    [22/07/22, 6:28:36 PM] Manisha: https://youtu.be/8opFefioYCw
    [23/07/22, 2:15:17 PM] Manisha: https://youtu.be/UbQgXeY_zi4
    [23/07/22, 2:19:03 PM] Manisha: the wrong zootopia ☠️
    [28/07/22, 6:49:20 AM] Manisha: https://youtu.be/3DrW2P0aLSg
    [28/07/22, 3:52:21 PM] Prashansa: Aah i love the original song❤️
    [04/08/22, 6:18:37 PM] Prashansa: https://www.youtube.com/watch?v=BLFGsxijRHg
    [04/08/22, 6:39:40 PM] Manisha: https://youtu.be/wRMrAQuccEo
    [05/08/22, 10:24:29 AM] Manisha: https://youtu.be/h9TlaYxoOO8
    [07/08/22, 10:46:25 PM] Manisha: https://youtu.be/zpMfZPAc1kg
    [14/08/22, 11:08:00 AM] Manisha: https://youtu.be/ICj38U2YWOs
    [14/08/22, 10:58:08 PM] Prashansa: https://www.youtube.com/watch?v=cpB2ZMzXrss such a soft song !
    [15/08/22, 10:37:12 AM] Manisha: https://youtu.be/VSwD_-kKcyI
    `;

parseChat(data);
