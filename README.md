# invert-association
key -> array to each in array as key -> key as value

## Installation
```
npm i invert-association -SE
```

## Testing
```
npm test
```

## Basic Example
```
invertAssoc({
  series: [ 'episode', 'season', 'creator' ]
}) 
// -> { episode: 'series', season: 'series', creator: 'series' }
```

## Impetus
The purpose of this module is to tranform a set of one-to-many associations
into a set of many-to-one relationships. Areas that this can be useful are:
* DAOs
* Validators
* Serializers
