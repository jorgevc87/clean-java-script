/*
Las clases deben comenzar cona una lista de variables. En el caso de que hayan
constantes púyblicas, estas deben aparecer primero. Seguidamente deben aparecer
las variables estáticas privadas y después las de instancia privadas. Variables de 
instancia publica al ultimo.

Luego métodos y funciones privadas, métodos y funciones publicas, el método constructor
privado despues del constructor named si existiese
Luego los métodos de instancia ordenados de mayor a menor importancia
Al final los getters y los setters
*/

/* Este ejemplo está echo con TypeScript */

class Post {
    private title: string
    private content: string
    private createdAt: number

    static create(title: string, content: string) {
        return new Post(title, content)
    }

    private constructor(title: string, content: string) {
        this.title = title
        this.content = content
        this.createdAt = Date.now()
    }

    setTitle(title: string) {
        this.title = title
    }

    setContent(content: string) {
        this.content = content
    }

    getTitle(): string {
        return this.title
    }

    getContent(): string {
        return this.content
    }

    getCreatedAt(): number {
        return this.createdAt
    }
}




