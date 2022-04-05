import React, { useMemo, useState } from 'react'
import { Header, Table, Rating, Button, Image, Modal, Icon, Form, Checkbox, Item, TextArea } from 'semantic-ui-react'

const TableExamplePadded = () => {
    const [data, setData] = useState(
        [{
        id: 1, name: "Don Quixote", rating: 4, comment: `
 Creatine supplementation is the reference compound for increasing
 muscular creatine levels; there is variability in this increase,
 however, with some nonresponders.`}, {
        id: 2, name: "A Tale of Two Cities", rating: 2, comment: ''},
    {
        id: 3, name: "The Lord of the Rings", rating: 5, comment: `
 Creatine supplementation is the reference compound for increasing
 muscular creatine levels; there is variability in this increase,
 however, with some nonresponders.`},
    {
        id: 4, name: "The Little Prince", rating: 3, comment: ''
    },
    {
        id: 5, name: " Harry Potter", rating: 1, comment: `
        On a hot summer day in the forest of Woody Woods,
         the giant Enorma, famous for being the largest tree in the forest, 
         comes crashing down, as it finally gives up on life. 
        In the jungle, the days have become unbearably hot and the once-mighty river has narrowed into a mere trickle`
    },{
        id: 6, name: " Beloved", rating: 4, comment: `
        Travel Diaries: The Pilgrimage is a short travel 
        journal that documents the author’s many journeys to the majestic 
        and inspiring temples and mountains of the Kumaon and Garhwal Himalayas. Written informally, the book is an effortless read.`
    }
    ])
    const [open, setOpen] = useState(false)
    
    const [review, addReview] = useState("")
    const [rating1, addRating] = useState("")

    const [key, setKey] = useState('')

    
    const handleForm = (d1, review, rating1, key) => {
        setOpen(false)
        console.log(d1, key)
        const id1 = key
        const data3 = data.map((item, index) => item.id === id1 ? { ...item, comment: review, rating: rating1 } : item)

        console.log("handleform", data3)
        setData(data3)

    }

    const handleDelete = (d1, key) => {
        console.log("handledddelet", d1, key)
        const id1 = d1.id
        const data3 = data.map((item, index) => item.id === id1 ? { ...item, comment: '', rating: 1 } : item)
        console.log("dataform", data3)
        setData(data3)

    }

    // function handleChangeOnRate(e, { rating }) {
    //     e.preventDefault();
    //     addRating(rating);
    // }
    
    return (<div>
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Books List</Table.HeaderCell>
                    <Table.HeaderCell>Rating</Table.HeaderCell>
                    <Table.HeaderCell>Reviews</Table.HeaderCell>
                    <Table.HeaderCell>Add Review</Table.HeaderCell>
                    <Table.HeaderCell>Update Review</Table.HeaderCell>
                    <Table.HeaderCell>Delete Review</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {data.map(pes => {
                    return (<Table.Row key={pes.id}>
                        <Table.Cell>
                            <Header as='h3' textAlign='center'>
                                {pes.name}
                            </Header>
                        </Table.Cell>

                        <Table.Cell>
                            <Rating icon='star' clearable defaultRating={pes.rating} maxRating={5} />
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            {pes.comment}
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            <Modal
                                centered={false}
                                open={open}
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                trigger={pes.comment.length === 0 ?
                                    <Button color='green' onClick={() => setKey(pes.id)}
                                    >Add</Button> : <Button disabled>add</Button>}

                            >
                                <Modal.Header>Add Review</Modal.Header>
                                <Modal.Content>
                                    <Form key={pes.id}>
                                        <Form.Field>
                                            <label>Add Review</label>
                                            <TextArea placeholder='Add review' onChange={(e) => addReview(e.target.value)} />
                                        </Form.Field>
                                        {/* <Form.Field>
                                            <label>Rating</label>
                                            <Rating icon='star' clearable defaultRating={pes.rating} maxRating={5}
                                                onRate={handleChangeOnRate}
                                            />
                                        </Form.Field> */}
                                        {/* <Form.Field>
                                            <Checkbox label='I agree to the Terms and Conditions' />
                                        </Form.Field> */}
                                        <Button color='green' type='submit' onClick={() => handleForm(pes, review, rating1, key) }>Submit</Button>
                                    </Form>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='red' onClick={() => setOpen(false)}>Close</Button>
                                </Modal.Actions>
                            </Modal>
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            <Modal
                                centered={false}
                                open={open}
                                onClose={() => setOpen(false)}
                                onOpen={() => setOpen(true)}
                                trigger={<Button color='yellow' onClick={() => setKey(pes.id)}
                                >Update</Button>}

                            >
                                <Modal.Header>Update review</Modal.Header>
                                <Modal.Content>
                                    <Form key={pes.id}>
                                        <Form.Field>
                                            <label>Add Review</label>
                                            <TextArea placeholder='Add review' onChange={(e) => addReview(e.target.value)} />
                                        </Form.Field>
                                        {/* <Form.Field>
                                            <label>Rating</label>
                                            <Rating icon='star' defaultRating={pes.rating} maxRating={5}
                                                onRate={handleChangeOnRate}
                                            />
                                        </Form.Field> */}
                                        {/* <Form.Field>
                                            <Checkbox label='I agree to the Terms and Conditions' />
                                        </Form.Field> */}
                                        <Button color='green' type='submit' onClick={() => handleForm(pes, review, rating1, key)}>Submit</Button>
                                    </Form>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button color='red' onClick={() => setOpen(false)}>Close</Button>
                                </Modal.Actions>
                            </Modal>
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            <Button color='red' onClick={() => handleDelete(pes, key)}>Delete</Button>
                        </Table.Cell>

                    </Table.Row>)
                })}

            </Table.Body>
        </Table>
    </div>
    )
}

export default TableExamplePadded
