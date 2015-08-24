cp = require 'child_process'
fs = require 'fs'


tmp_dir = '/tmp'
for name in ['TMPDIR', 'TMP', 'TEMP']
  tmp_dir = dir.replace /\/$/, '' if (dir = process.env[name])?


timeout = (limit, msg) ->
  if (new Date).getTime() > limit
    throw new Error msg

create_pipes = ->
  t_limit = (new Date).getTime() + 1000 # 1 second timeout

  until created
    try
      dir = tmp_dir + '/sync-exec-' + Math.floor Math.random() * 1000000000
      fs.mkdir dir
      created = true
    timeout t_limit, 'Can not create sync-exec directory'
  dir


read_pipes = (dir, max_wait) ->
  t_limit = (new Date).getTime() + max_wait

  until read
    try
      read = true if fs.readFileSync(dir + '/done').length
    timeout t_limit, 'Process execution timeout or exit flag read failure'

  until deleted
    try
      fs.unlinkSync dir + '/done'
      deleted = true
    timeout t_limit, 'Can not delete exit code file'

  result = {}
  for pipe in ['stdout', 'stderr', 'status']
    result[pipe] = fs.readFileSync dir + '/' + pipe, encoding: 'utf-8'
    read = true
    fs.unlinkSync dir + '/' + pipe

  try
    fs.rmdirSync dir

  result.status = Number result.status
  result


module.exports = (cmd, max_wait, options) ->
  if max_wait and typeof max_wait is 'object'
    [options, max_wait] = [max_wait, null]

  options ?= {}

  unless typeof options is 'object' and options
    throw new Error 'options must be an object'

  max_wait ?= options.max_wait or 3600000 # 1hr default
  unless not max_wait? or max_wait >= 1
    throw new Error 'max wait must be >=1 millisecond'
  delete options.max_wait

  dir = create_pipes()
  cmd = '(' + cmd + ' > ' + dir + '/stdout 2> ' + dir + '/stderr ); echo $?' +
        ' > ' + dir + '/status ; echo 1 > ' + dir + '/done'
  cp.exec cmd, options, ->

  read_pipes dir, max_wait
