print('Greetings, welcome to getting to know reace')

ans = input('lets get started (yay/nay): ')
score = 0
total_q = 10

if ans.lower() == 'yay':
    ans = input('1. What is my middle name? ')
    if ans.lower() == 'ian': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('2. What is my birth year? ')
    if ans == '1992': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('3. How tall am I? ')
    if ans.lower() == '1.8 m' or ans.lower() == '180 cm': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('4. What is my last name? ')
    if ans.lower() == 'roeloffze': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('5. What is my hair colour? ')
    if ans.lower() == 'blonde' or ans.lower() == 'ash blonde' : 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('6. When did I graduate high school? ')
    if ans == '2010': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('7. How old am I? ')
    if ans == '28': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('8. What is my ethnicity? ')
    if ans.lower() == 'caucasian' or ans.lower() == 'white': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('9. What country am I from? ')
    if ans.lower() == 'south africa': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    ans = input('10. What is my eye colour? ')
    if ans.lower() == 'blue': 
        score += 1
        print('correct')
    else: 
        print('incorrect')


    print('lets see how well know me. Your score is:',str(score) + '/10.')
    mark = (score/total_q) * 100

    print("Mark:", str(mark) + '%')
print('thank you for playiing')
