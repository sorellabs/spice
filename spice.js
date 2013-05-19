// # Module spice
//
// No-frills string interpolation
//
// :licence: MIT
//   Copyright (c) 2013 Quildreen "Sorella" Motta
//
//   Permission is hereby granted, free of charge, to any person
//   obtaining a copy of this software and associated documentation
//   files (the "Software"), to deal in the Software without
//   restriction, including without limitation the rights to use, copy,
//   modify, merge, publish, distribute, sublicense, and/or sell copies
//   of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:
//
//   The above copyright notice and this permission notice shall be
//   included in all copies or substantial portions of the Software.
//
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
//   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
//   BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
//   ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//   CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//   SOFTWARE.



// -- Constants & Aliases ----------------------------------------------
var templateRE = /{(\\?:)([^}]+)}/g



// -- Helpers ----------------------------------------------------------

// ### Function callable_p
//
// Is a subject callable?
//
// :: A -> bool
function callable_p(subject) {
  return typeof subject == 'function' }


// ### Function as_value
//
// Returns the actual substitution for the given value/key.
//
// :: template-value, string -> string
function as_value(value, key) {
  return callable_p(value)?  value(key)
  :      /* otherwise */     value }



// -- Interfaces -------------------------------------------------------

// ### Interface template-value
//
// :: string | (string -> string)



// -- Core implementation ----------------------------------------------

// ### Function format
//
// Performs string interpolation given a template string as basis, and a
// substitution map.
//
// If a mapping is not given, we assume it to be empty, in which case
// the template variables are simply stripped away.
//
// A template variable is a special construct in the form:
//
//     <template-variable> ::= "{:" <any but "}"> "}"
//
// For example, to provide a "Hello, world!" template, that adjusts to a
// given name, one could write:
//
//     format("Hello, {:subject}!", { subject: "world" })
//     // => "Hello, world!"
//
// A template variable can be escaped by placing a backslash between the
// open-curly braces and the colon, such that the construct would be
// output verbatim:
//
//     format("Hello, {\\:subject}!", { subject: "world" })
//     // => "Hello, {:subject}!"
//
//     // Remember that backslashes must be escaped inside String
//     // literals.
//
// :: string, { string -> template-value } -> string
function format(string, mappings) {
  mappings = mappings || {}
  return string.replace(templateRE, resolve_identifier)

  function resolve_identifier(match, mod, key) {
    return mod == '\\:'?      '{:' + key + '}'
    :      key in mappings?   as_value(mappings[key], key)
    :      /* otherwise */    '' }}



// -- Exports ----------------------------------------------------------
module.exports = format