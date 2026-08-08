from pathlib import Path
from subprocess import run, PIPE
import os
repo = Path(r'D:/My Portfolio/portfolio-website-main')
lock = repo / '.git' / 'index.lock'
report = []
report.append(f'lock_exists_before={lock.exists()}')
if lock.exists():
    try:
        lock.unlink()
        report.append('lock_removed=True')
    except Exception as e:
        report.append(f'lock_remove_error={e}')
report.append(f'lock_exists_after={lock.exists()}')
for cmd in [['git', 'rev-parse', '--abbrev-ref', 'HEAD'], ['git', 'status', '--short'], ['git', 'log', '-1', '--oneline']]:
    try:
        proc = run(cmd, cwd=repo, stdout=PIPE, stderr=PIPE, text=True)
        report.append(f'cmd={" ".join(cmd)}')
        report.append(f'returncode={proc.returncode}')
        report.append(f'stdout={proc.stdout.strip()}')
        report.append(f'stderr={proc.stderr.strip()}')
    except Exception as e:
        report.append(f'cmd_error={cmd} {e}')
with open(repo / 'debug_git_output.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(report))
print('done')
