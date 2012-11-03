'use strict';

describe('S5B.node', function () {

    describe('construction', function () {

        it('should create a node that connects to itself', function () {
            var node = S5B.node(17);

            expect(node).not.toBeNull();
            expect(node.get_data()).toEqual(17);
            expect(node.get_next()).toEqual(node);
            expect(node.get_previous()).toEqual(node);
        })
    });

    describe('append', function () {

        it('should append the new node after this node', function () {
            var node_1 = S5B.node(17);
            var node_2 = S5B.node(23);

            node_1.append(node_2);

            expect(node_1.get_next()).toEqual(node_2);
        });

        it('should set node as the previous node of the appended node', function () {
            var node_1 = S5B.node(17);
            var node_2 = S5B.node(23);

            node_1.append(node_2);

            expect(node_2.get_previous()).toEqual(node_1);
        });

        it('should chain together appended nodes', function () {
            var node_1 = S5B.node(1);
            var node_2 = S5B.node(2);
            var node_3 = S5B.node(3);
            var node_4 = S5B.node(4);
            var node_5 = S5B.node(5);
            var node_6 = S5B.node(6);

            node_1.append(node_2);
            node_2.append(node_3);
            node_3.append(node_4);
            node_4.append(node_5);
            node_5.append(node_6);

            expect(node_2.get_previous()).toEqual(node_1);
            expect(node_3.get_previous()).toEqual(node_2);
            expect(node_4.get_previous()).toEqual(node_3);
            expect(node_5.get_previous()).toEqual(node_4);
            expect(node_6.get_previous()).toEqual(node_5);
            expect(node_1.get_previous()).toEqual(node_6);

            expect(node_1.get_next()).toEqual(node_2);
            expect(node_2.get_next()).toEqual(node_3);
            expect(node_3.get_next()).toEqual(node_4);
            expect(node_4.get_next()).toEqual(node_5);
            expect(node_5.get_next()).toEqual(node_6);
            expect(node_6.get_next()).toEqual(node_1);
        });

        it('should splice in an appended chain of nodes', function () {
            var node_1 = S5B.node(1);
            var node_2 = S5B.node(2);
            var node_3 = S5B.node(3);
            var node_4 = S5B.node(4);
            var node_5 = S5B.node(5);
            var node_6 = S5B.node(6);

            node_1.append(node_2);
            node_2.append(node_3);

            node_4.append(node_5);
            node_5.append(node_6);

            node_3.append(node_4);

            expect(node_2.get_previous()).toEqual(node_1);
            expect(node_3.get_previous()).toEqual(node_2);
            expect(node_4.get_previous()).toEqual(node_3);
            expect(node_5.get_previous()).toEqual(node_4);
            expect(node_6.get_previous()).toEqual(node_5);
            expect(node_1.get_previous()).toEqual(node_6);

            expect(node_1.get_next()).toEqual(node_2);
            expect(node_2.get_next()).toEqual(node_3);
            expect(node_3.get_next()).toEqual(node_4);
            expect(node_4.get_next()).toEqual(node_5);
            expect(node_5.get_next()).toEqual(node_6);
            expect(node_6.get_next()).toEqual(node_1);
        });

    });

    describe('insert', function () {

        it('should insert the new node before this node', function () {
            var node_1 = S5B.node(17);
            var node_2 = S5B.node(23);

            node_1.insert(node_2);

            expect(node_1.get_previous()).toEqual(node_2);
        });

        it('should set node as the next node of the inserted node', function () {
            var node_1 = S5B.node(17);
            var node_2 = S5B.node(23);

            node_1.insert(node_2);

            expect(node_2.get_next()).toEqual(node_1);
        });

        it('should chain together inserted nodes', function () {
            var node_1 = S5B.node(1);
            var node_2 = S5B.node(2);
            var node_3 = S5B.node(3);
            var node_4 = S5B.node(4);
            var node_5 = S5B.node(5);
            var node_6 = S5B.node(6);

            node_1.insert(node_2);
            node_2.insert(node_3);

            node_3.insert(node_4);
            node_4.insert(node_5);

            node_5.insert(node_6);

            expect(node_2.get_next()).toEqual(node_1);
            expect(node_3.get_next()).toEqual(node_2);
            expect(node_4.get_next()).toEqual(node_3);
            expect(node_5.get_next()).toEqual(node_4);
            expect(node_6.get_next()).toEqual(node_5);
            expect(node_1.get_next()).toEqual(node_6);

            expect(node_1.get_previous()).toEqual(node_2);
            expect(node_2.get_previous()).toEqual(node_3);
            expect(node_3.get_previous()).toEqual(node_4);
            expect(node_4.get_previous()).toEqual(node_5);
            expect(node_5.get_previous()).toEqual(node_6);
            expect(node_6.get_previous()).toEqual(node_1);
        });

        it('should splice in an inserted chain of nodes', function () {
            var node_1 = S5B.node(1);
            var node_2 = S5B.node(2);
            var node_3 = S5B.node(3);
            var node_4 = S5B.node(4);
            var node_5 = S5B.node(5);
            var node_6 = S5B.node(6);

            node_1.insert(node_2);
            node_2.insert(node_3);
            node_4.insert(node_5);
            node_5.insert(node_6);
            node_3.insert(node_4);

            expect(node_2.get_next()).toEqual(node_1);
            expect(node_3.get_next()).toEqual(node_2);
            expect(node_4.get_next()).toEqual(node_3);
            expect(node_5.get_next()).toEqual(node_4);
            expect(node_6.get_next()).toEqual(node_5);
            expect(node_1.get_next()).toEqual(node_6);

            expect(node_1.get_previous()).toEqual(node_2);
            expect(node_2.get_previous()).toEqual(node_3);
            expect(node_3.get_previous()).toEqual(node_4);
            expect(node_4.get_previous()).toEqual(node_5);
            expect(node_5.get_previous()).toEqual(node_6);
            expect(node_6.get_previous()).toEqual(node_1);
        });

    });

    describe ('unlink', function () {
        it('should return the unlinked node to allow chained methods', function() {
            var node = S5B.node(17);

            var unlinked_node = node.unlink();

            expect(unlinked_node.get_data()).toEqual(17);

        });
        it('should remove a node linked only to itself should have no effect', function() {
            var node = S5B.node(1);

            var unlinked_node = node.unlink();

            expect(node.get_next()).toEqual(node);
            expect(node.get_previous()).toEqual(node);
            expect(unlinked_node).toEqual(node);

        });

        it('should link the unlinked node to itself when unlinking from a chain', function () {
            var node_1 = S5B.node(1);
            var node_2 = S5B.node(2);
            var node_3 = S5B.node(3);
            var node_4 = S5B.node(4);

            node_1.append(node_2);
            node_2.append(node_3);
            node_3.append(node_4);

            node_3.unlink();

            expect(node_3.get_next()).toEqual(node_3);
            expect(node_3.get_previous()).toEqual(node_3);
        });

        it('should close the gap in the chain when the node is unlinked', function () {
            var node_1 = S5B.node(1);
            var node_2 = S5B.node(2);
            var node_3 = S5B.node(3);
            var node_4 = S5B.node(4);

            node_1.append(node_2);
            node_2.append(node_3);
            node_3.append(node_4);

            node_3.unlink();

            expect(node_2.get_next()).toEqual(node_4);
            expect(node_4.get_previous()).toEqual(node_2);
        });
    });
});
