import os

# トラックデータの定義
tracks = [
    {
        "name": "faelaeuifawuioeauihhuafh",
        "artist": "Artist 1",
        "artist-img": "https://pbs.twimg.com/profile_images/1828810812187930624/BYrwVKyc_400x400.jpg",
        "description": "A groovy track by Artist 1.It it it iti tt tiasgjuoajgfioaejgfoeiagjfioeajfgioe;afgioeajoijoiajajoojiao",
        "image": "https://f4.bcbits.com/img/a1778498018_16.jpg",
        "torrent": "torrents/track1.torrent",
        "magnet": "magnet:?xt=urn:btih:HASH1&dn=track1.mp3&tr=http://tracker.example.com:6969/announce",
        "track1-name": "track1name",
        "track2-name": "Super great track2",
        "track3-name": "Amsterdam 3",
        "track4-name": "TokyoTokyoTokyo love Tokyo45",
        "track5-name": "uuuuuuuuuuuuu",
        "donation1": "0xgajioeajiogeairajiaigejiajiajja",
        "donation2": ""
    },
    {
        "name": "Track 2",
        "artist": "Artist 2",
        "artist-img": "https://pbs.twimg.com/profile_images/1828810812187930624/BYrwVKyc_400x400.jpg",
        "description": "A fantastic track by Artist 2.",
        "image": "https://f4.bcbits.com/img/a1778498018_16.jpg",
        "torrent": "torrents/track2.torrent",
        "magnet": "magnet:?xt=urn:btih:HASH2&dn=track2.mp3&tr=http://tracker.example.com:6969/announce",
        "track1-name": "track1name",
        "track2-name": "12",
        "track3-name": "3",
        "track4-name": "45",
        "track5-name": "track5 name",
        "donation1": "jfaijiajidafijiaj[]",
        "donation2": "faj;aijaiooajioi"
    }
]

# 出力フォルダを定義
output_dir = "weblabel_pages"
os.makedirs(output_dir, exist_ok=True)

# トラックごとの詳細ページを生成
for track in tracks:
    filename = f"{track['name'].replace(' ', '_').lower()}.html"
    filepath = os.path.join(output_dir, filename)
    
    # HTMLコンテンツの作成
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{track['name']} - {track['artist']}</title>
        <link rel="stylesheet" href="https://unpkg.com/98.css">
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <div class="title-bar" >
            <div class="title-bar-text">Weblabel</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>

        <section id="track-details">
            <h3>{track['name']} - {track['artist']}</h3>
            <div class="album">
                <div class="track-item">
                    <img src="{track['image']}" alt="{track['name']} cover image">
                        <audio src="../assets/audio/{track['name'].replace(' ', '_').lower()}.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                        </audio>
                        <div class="playstop">
                            <div id="play">play ></div>
                            <div id="stop">stop II</div>
                        </div>
                    <div class="download-item">
                        <a href="{track['torrent']}">Download Torrent</a> 
                        <a href="{track['magnet']}">Magnet Link</a>
                    </div>
                </div>
            </div>      

            <div class="other-tracks">
                <ul>
                    <li>
                        1. {track['track1-name']}
                        <audio src="../assets/audio/{track['track1-name'].replace(' ', '_').lower()}.mp3" type="audio/mpeg">
                        </audio>
                        <div id="play">play ></id>
                    </li>
                    <li>
                        2. {track['track2-name']}
                        <audio src="../assets/audio/{track['track2-name'].replace(' ', '_').lower()}.mp3" type="audio/mpeg">
                        </audio>
                        <div id="play">play ></id>
                    </li>
                    <li>
                        3. {track['track3-name']}
                        <audio src="../assets/audio/{track['track3-name'].replace(' ', '_').lower()}.mp3" type="audio/mpeg">
                        </audio>
                        <button id="play">play ></button>
                    </li>
                    <li>
                        4. {track['track4-name']}
                        <audio src="../assets/audio/{track['track4-name'].replace(' ', '_').lower()}.mp3" type="audio/mpeg">
                        </audio>
                        <div id="play">play ></id>
                    </li>
                    <li>
                        5. {track['track5-name']}
                        <audio src="../assets/audio/{track['track5-name'].replace(' ', '_').lower()}.mp3" type="audio/mpeg">
                        </audio>
                        <div id="play">play ></id>
                    </li>                                                                                
                </ul>
            </div>
            <p>{track['description']}</p>
        </section>

            <div class="artist">
                <div class="artist-info">
                    <img src="{track['artist-img']}" alt="{track['artist']} image">
                    <p>{track['artist']}</p>
                </div>
                <div class='donation'>
                    <p>Donate</p>
                    <li>{track['donation1']}</li>
                    <li>{track['donation2']}</li>
                </div>
            </div>        
    </body>
    </html>
    """
    
    # HTMLファイルを出力
    with open(filepath, "w", encoding="utf-8") as file:
        file.write(html_content)


print(f"Track detail pages generated in {output_dir}")
# 次に、index.htmlを更新してトラックを追加
index_filepath = "index.html"
with open(index_filepath, "w", encoding="utf-8") as index_file:
    index_content = """
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Weblabel</title>
        <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="https://unpkg.com/98.css">
    </head>
    <body>
        <div class="title-bar">
            <div class="title-bar-text">Weblabel</div>
            <div class="title-bar-controls">
                <button aria-label="Close"></button>
            </div>
        </div>
            <div class="window" style="max-width: 2500px;">
                <div class="title-bar">
                    <div class="title-bar-text">What is Weblabel?</div>
                </div>
                <div class="window-body">
                    <ul>
                        <li>1. is a music label for borderless artists who can create grooves.</li>
                        <li>2. contributes to the borderless music culture and supports artists who believe that love, respect, safety, and privacy are important for everyone.</li>
                        <li>3. is a netlabel which is built on a decentralized stack, IPFS, Fleek and Torrent to ensure its longevity.</li>
                        <li>4. Artists don't use main DJ name here</li>
                    </ul>
                </div>
                <div class="status-bar">
                    <p class="status-bar-field">~~~~</p>
                    <p class="status-bar-field">+=+=+=+</p>
                    <p class="status-bar-field"><><>></p>
                </div>
            </div>
        </section>



    """
    # トラックデータを基に、各トラックをindex.htmlに追加
    for track in tracks:
        index_content += f"""
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text">{track['name']} | {track['artist']}</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
           
            <img src="{track['image']}" alt="{track['name']} cover image">
            <div class="button">
                <a href="weblabel_pages/{track['name'].replace(' ', '_').lower()}.html" class="button-link"></a>
                <button>Details</button>
            </div>
        </div>
        """

    index_content += """
            </ul>
        </section>
    </body>
    </html>
    """

    # index.htmlを出力
    index_file.write(index_content)


print("index.html updated with new tracks.")
