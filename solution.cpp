```cpp
#include <iostream>
#include <sstream>
#include <string>

struct Node {
    int val;
    Node* next;
    Node(int x) : val(x), next(NULL) {}
};

class LinkedList {
public:
    Node* head;
    LinkedList() : head(NULL) {}

    void addNode(int val) {
        if (head == NULL) {
            head = new Node(val);
        } else {
            Node* temp = head;
            while (temp->next != NULL) {
                temp = temp->next;
            }
            temp->next = new Node(val);
        }
    }

    std::string serialize() {
        std::ostringstream oss;
        Node* temp = head;
        while (temp != NULL) {
            oss << temp->val << " ";
            temp = temp->next;
        }
        return oss.str();
    }

    void deserialize(std::string data) {
        std::istringstream iss(data);
        int val;
        while (iss >> val) {
            addNode(val);
        }
    }
};

int main() {
    LinkedList list;
    list.addNode(1);
    list.addNode(2);
    list.addNode(3);
    std::string serialized = list.serialize();
    std::cout << "Serialized: " << serialized << std::endl;

    LinkedList newList;
    newList.deserialize(serialized);
    std::string deserialized = newList.serialize();
    std::cout << "Deserialized: " << deserialized << std::endl;

    return 0;
}
```