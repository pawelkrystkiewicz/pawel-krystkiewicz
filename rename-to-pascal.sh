#!/bin/bash

# Function to convert hyphenated lowercase to PascalCase
to_pascal_case() {
    # remove extension if accidentally passed
    name_no_ext=$(basename "$1" .tsx)
    # replace hyphens with spaces, capitalize each word, remove spaces
    echo "$name_no_ext" | sed -E 's/-/ /g' | awk '{for(i=1;i<=NF;i++){$i=toupper(substr($i,1,1)) substr($i,2)}}1' | tr -d ' '
}

# Find all .tsx files (current directory and subdirectories)
find . -type f -name "*.tsx" | while read -r file; do
    dir=$(dirname "$file")
    base=$(basename "$file" .tsx)

    pascal=$(to_pascal_case "$base")

    if [ "$base" != "$pascal" ]; then
        new_file="$dir/$pascal.tsx"
        echo "Renaming $file -> $new_file"
        mv "$file" "$new_file"
    fi
done
