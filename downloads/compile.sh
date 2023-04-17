#!/usr/bin/sh

# functions : 
#       1. clear the terminal output
#       2. compile the ros packages
#       3. setup the workspace afer compilation
#       4. change to current working directory
# it is assumed that workspace folder is stored at home directory.
# Usage:
# for any workspace
# 1. compile <flags> <pathTOworkspace> (or)
# for default workspace
# 2. compile <with no flags>
# flags:
# -c = to compile the workspace
# -s = to set up the workspace
# c/s = for default work, (compile/source)
dir=$PWD

WORKSPACE=catkin_ws # default workspace <put yout default workpace folder name here
flag=0
while getopts ':hs:c:' OPTION; do
  flag=1
  case "$OPTION" in
    h)
      echo -e "Usage: compile [flags (-h, -s, -c)] <workspace>\n"
      echo -e "\t -h flag provides the help to use the command compile"
      echo -e "\t -s <pathTOworkspace> sets up the workspace in the current terminal session"
      echo -e "\t -c <pathTOworkspace> compiles the workspace in the current terminal session \n\t\t\t      and in addition it sets up the workspace"
      ;;
    s)
      source ~/$OPTARG/devel/setup.bash
      ;;
    c)
      echo "Current Directory: $dir"
      cd ~/$OPTARG
      catkin_make
      source devel/setup.bash
      cd $dir
      echo -e "......end of catkin_make......!"
      ;;
    ?)
      echo "script usage: compile [-s <pathTOworkspace>] [-c <pathTOworkspace>] [-h]" >&2
      #exit 0
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      #exit 0
      ;;
  esac
done
OPTIND=0

# this is what I essentially made this shell script for ...
if [ $flag == 0 ]; then
    read -p "source or compile (s/c) =  " default_flag
    if [ $default_flag == c ]; then
        cd ~/$WORKSPACE
        catkin_make
        source devel/setup.bash
        cd $dir
    elif [ $default_flag == s ]; then
        source ~/$WORKSPACE/devel/setup.bash
    else
        echo -e "Bad expression. Use (s/c) to source or compile the workspace"
    fi
fi
