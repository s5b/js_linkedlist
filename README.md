js_linkedlist
=============

A JavaScript implementation of (circular) linked lists. This implementation provides
a circular linked list with an associated data 'payload' of your choosing.

You can append nodes after the current node. And you can insert nodes before the current node.

Example:
--------

To create an initial list with one node - linked to itself:

  var node_1 = S5B.node('first');

Add another node after the first node:

  var node_2 = S5B.node('second');
  node_1.append(node_2);

Now, the following are true:

  node_1.get_next() === node_2
  node_2.get_next() === node_1
  node_1.get_previous() ===  node_2
  node_2.get_previous() === node_1

Add another node after node_2:

  var node_3 = S5B.node('third');
  node_2.append(node_3);

Now, the following are true:

  node_1.get_next() === node_2
  node_2.get_next() === node_3
  node_3.get_next() === node_1
  node_1.get_previous() === node_3
  node_2.get_previous() === node_1
  node_3.get_previous() === node_2

You can also splice in linked lists. Here we create a new list with two nodes
and insert it before node_3:

  var node_4 = S5B.node('fourth');
  var node_5 = S5B.node('fifth');
  var node_6 = S5B.node('sixth');

  node_4.append(node_5);
  node_5.append(node_6);

  node_3.insert(node_4);

Now, the following are true:

  node_1.get_next() === node_2
  node_2.get_next() === node_5
  node_3.get_next() === node_1
  node_4.get_next() === node_3
  node_5.get_next() === node_6
  node_6.get_next() === node_4
  node_1.get_previous() === node_3
  node_2.get_previous() === node_1
  node_3.get_previous() === node_4
  node_4.get_previous() === node_6
  node_5.get_previous() === node_2
  node_6.get_previous() === node_5


Tests:
------

There are Jasmine tests that provide civerage for the functionality and document the use cases
for the code. The easiest way to run the tests is to use nodejs with testacular installed:

With nodejs and testacular installed run the following commands:

  node ./scripts/web-server.js 2>1 &

This will start a web server on port 8000 in the background.

Next, to run the tests themselves:

   ./scripts/test.sh

This will start the test server which will watch for changes in the source code. The simplest way
to trigger the tests is to 'touch' the source file (in a separate terminal window):

  touch ./src/js/circular-list.js

-end-