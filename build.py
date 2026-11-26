import json, re, pathlib

posts = []
for f in sorted(pathlib.Path('posts').iterdir()):
    m = re.match(r'(\d{4}-\d{2}-\d{2})(?:_(.+))?\.(\w+)$', f.name)
    if m:
        date, title, _ = m.groups()
        posts.append({
            'date': date,
            'file': f.name,
            'title': (title or '').replace('-', ' ')
        })

pathlib.Path('posts/manifest.json').write_text(json.dumps(posts, indent=1))
print(f'{len(posts)} posts')
