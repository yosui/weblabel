import os

# トラックデータの定義
tracks = [
    {
        "name": "Track 1",
        "artist": "Artist 1",
        "artist-img": "https://pbs.twimg.com/profile_images/1828810812187930624/BYrwVKyc_400x400.jpg",
        "description": "A groovy track by Artist 1.",
        "image": "https://f4.bcbits.com/img/a1778498018_16.jpg",
        "torrent": "torrents/track1.torrent",
        "magnet": "magnet:?xt=urn:btih:HASH1&dn=track1.mp3&tr=http://tracker.example.com:6969/announce",
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
        "donation1": "https://etherscan.io/address/artist2_eth_address",
        "donation2": "https://etherscan.io/address/artist2_eth_address"
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
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <header>
            <h1>Weblabel</h1>
        </header>
        <section id="track-details">
            <h3>{track['name']} - {track['artist']}</h3>
            <div class="track-item">
                <img src="{track['image']}" alt="{track['name']} cover image">
            </div>
            <div class="download-item">
                <a href="{track['torrent']}">Download Torrent</a> 
                <a href="{track['magnet']}">Magnet Link</a>
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
                </span>
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
    </head>
    <body>
        <header>
            <h1>Weblabel</h1>
        </header>

        <section id="about">
            <ul>"Weblabel"
                <li>1. is a music label for borderless artists who can create grooves.</li>
                <li>2. contributes to the borderless music culture and supports artists who believe that love, respect, safety, and privacy are important for everyone.</li>
                <li>3. is a netlabel which is built on a decentralized stack, IPFS, Fleek and Torrent to ensure its longevity.</li>
                <li>4. Artists don't use main DJ name here</li>
            </ul>
        </section>

        <section id="track">
            <h2>Tracks</h2>
            <ul>
    """
    # トラックデータを基に、各トラックをindex.htmlに追加
    for track in tracks:
        index_content += f"""
        <li class="track-item">
            <img src="{track['image']}" alt="{track['name']} cover image">
            <id class="button-lists">
                <strong>{track['name']}</strong>
            <a href="weblabel_pages/{track['name'].replace(' ', '_').lower()}.html">Details</a>
            </id>
        </li>
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
