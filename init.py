import os

commands = [
    'cd client',
    'npm install',
    'cd ..',
    'cd server',
    'npm install'
]

toRun = '\n'.join(commands)

os.system(toRun)