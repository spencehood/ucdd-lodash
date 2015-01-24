/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) 
{
    var range = []
    var x=0

    if (end == null)
    {
        end = start
        start = 0
    }
    for (i = start; i < end; i++) 
        range[x++] = i

    return range
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) 
{
    var newObj = {}
    for (var i in object) 
        for (var j in propertyNames)
            if(propertyNames[j] == i)
                newObj[i] = object[i]

    return newObj
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) 
{
    for (var i = 0; i < collection.length; i++)
        if (predicate(collection[i]))
            return true

    return false
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) 
{
    var j =0;
    for (var i = 0; i < collection.length; i++) 
        if (predicate(collection[i]))
            j++

    if (j == collection.length)
        return true
    else
        return false
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) 
{
    var f_count
    var count = Object.keys(object).length;
    
    for (var i = 0; i < collection.length; i++)
    {
        f_count = 0
        for (j in object)
        {   
            if ((collection[i].hasOwnProperty(j)==true) && (collection[i][j] == object[j]))
                f_count++

            if (count == f_count)
                return collection[i]
        }    
    }

    return false
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib